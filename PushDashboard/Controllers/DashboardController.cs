using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using PushDashboard.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace PushDashboard.Controllers
{
    public class DashboardController : Controller
    {
        private DataTable dataTable = new DataTable();
        private static String DataSource = "Data Source=push.ctwzprc2znex.us-east-1.rds.amazonaws.com; Initial Catalog=Reports;User Id=bob;Password=industrylawpricesomewhere;";
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public class ChartLoc
        {
            public string Category { get; set; }
            public List<string> Data { get; set; }
        }

        public ContentResult RevByAdvertiser()
        {
            int[] timearray = new int[96];
            int[,] finaltimearray = new int[96, 59];
            string[] daySlice = new string[59];
            int counter = daySlice.Length;
            for (int i = 0; i < daySlice.Length; i++)
            {
                var day = DateTime.UtcNow.AddDays(-(counter - i));
                daySlice[i] = Convert.ToDateTime(day).ToString("yyyy-MM-dd");
            }
            DateTime startDate = DateTime.UtcNow.Date.AddDays(-61);
            DateTime endDate = DateTime.UtcNow.Date.AddDays(0);
            string Query = @"SELECT 
	                            date as 'date',
	                            revenuestream as revenuestream,
	                            SUM(revenue) AS revenue
		                            FROM [Reports].[dbo].[DailyRevenue]
		                            WHERE 1=1 AND date >= dateAdd(DAY, -60, GETDATE()) AND date <= GETDATE() AND category = 'push'
                            group by
	                            revenuestream,
	                            date
		                            order by revenuestream, date";
            // Since table format is (date, revenuestream, revenue), we'll model our Json Array likewise
            // Kinda like a dictionary
            JArray Date = new JArray();
            JArray Data = new JArray();
            JArray SingleDay = new JArray();
            JArray Revenue = new JArray();
            JArray DayTime = new JArray();
            JObject Record = new JObject();
            JObject Day = new JObject();
            using (var sqlConn = new SqlConnection(DataSource))
            {
                sqlConn.Open();
                SqlCommand command = new SqlCommand(string.Format(Query, startDate.ToString(), endDate.ToShortDateString()), sqlConn);
                string revenuestream = "tt";
                using (var reader = command.ExecuteReader())
                {
                    if (reader != null && reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            string temp = Convert.ToDateTime(reader["date"]).ToString("yyyy-MM-dd");
                            if (revenuestream != "tt" && revenuestream != Convert.ToString(reader["revenuestream"]))
                            {
                                while (DayTime.Count < daySlice.Length)
                                {
                                    DayTime.Add(daySlice[DayTime.Count]);
                                    Revenue.Add(0);
                                }
                                Record = new JObject();
                                Record.Add("Advertiser", revenuestream);
                                Record.Add("Revenue", Revenue);
                                Record.Add("Date", DayTime);
                                Data.Add(Record);
                                DayTime = new JArray();
                                Revenue = new JArray();
                            }
                            revenuestream = Convert.ToString(reader["revenuestream"]);
                            if (daySlice.Length != DayTime.Count)
                            {
                                while (daySlice[DayTime.Count] != temp)
                                {
                                    DayTime.Add(daySlice[DayTime.Count]);
                                    Revenue.Add(0);
                                }
                            }
                            DayTime.Add(Convert.ToDateTime(reader["date"]).ToString("yyyy-MM-dd"));
                            Revenue.Add(Convert.ToInt32(reader["revenue"] is DBNull ? 0 : reader["revenue"]));
                        }
                    }
                }
                Record = new JObject();
                while (DayTime.Count < daySlice.Length)
                {
                    DayTime.Add(daySlice[DayTime.Count]);
                    Revenue.Add(0);
                }
                Record.Add("Advertiser", revenuestream);
                Record.Add("Revenue", Revenue);
                Record.Add("Date", DayTime);
                Data.Add(Record);
                sqlConn.Close();
            }
            return new ContentResult
            {
                Content = Data.ToString(),
                ContentType = "application/json"
            };
        }
        public ContentResult AllowReceive15()
        {
            string Query = @"SELECT
                	            CAST(DATEADD(HOUR,-4,timeslice)AS time) AS timeslice,
                	            CASE CAST(DATEADD(HOUR,-4,timeslice) AS DATE)
                		            WHEN CAST(GETDATE() AS DATE) THEN 'Today'
                		            WHEN CAST(DATEADD(DAY,-7,GETDATE()) AS DATE) THEN 'Last Week'
                	            END AS DayOfWeek,
                                platform,
                	            SUM(allows) AS allows,
                	            SUM(receives) AS receives
                            FROM
                	            Reports.dbo.DashboardMetrics WITH(NOLOCK)
                            WHERE 1=1
                	            AND CAST(DATEADD(HOUR,-4,timeslice) AS DATE) IN (CAST(GETDATE() AS DATE) , CAST(DATEADD(DAY,-7,GETDATE()) AS DATE))
                	            AND [date] BETWEEN CAST(DATEADD(DAY,-8,GETDATE()) AS DATE) AND CAST(GETDATE() AS DATE)
                            GROUP BY
                	            DATEADD(HOUR,-4,timeslice),
                	            CASE CAST(DATEADD(HOUR,-4,timeslice) AS DATE)
                		            WHEN CAST(GETDATE() AS DATE) THEN 'Today'
                		            WHEN CAST(DATEADD(DAY,-7,GETDATE()) AS DATE) THEN 'Last Week'
                	            END,
                                platform
                            ORDER BY
                	            timeslice, DayOfWeek";
            // Since table format is (timeslice, DayOfWeek, Allows, Receives, Clicks), we'll model our Json Array likewise
            // Kinda like a dictionary
            JArray Data = new JArray();
            JArray DateArray = new JArray();
            JArray DayOfWeek = new JArray();
            JArray Allows = new JArray();
            JArray Receives = new JArray();
            JArray Platform = new JArray();
            JObject Record = new JObject();
            // Connect to MSSQL database using Spigot server
            using (SqlConnection conn = new SqlConnection(DataSource))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(Query, conn);
                cmd.CommandTimeout = 0;
                cmd.ExecuteNonQuery();
                // Execute above SQL Query
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader != null && reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            DateArray.Add(reader["timeslice"]);
                            DayOfWeek.Add(reader["DayOfWeek"]);
                            Allows.Add(Convert.ToInt32(reader["allows"]));
                            Receives.Add(Convert.ToInt32(reader["receives"]));
                            Platform.Add(reader["platform"]);

                            Record = new JObject();
                            Record.Add("Date", DateArray);
                            Record.Add("DayOfWeek", DayOfWeek);
                            Record.Add("Allows", Allows);
                            Record.Add("Receives", Receives);
                            Record.Add("Platform", Platform);
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return new ContentResult { Content = Record.ToString(), ContentType = "application/json" };
        }
    }
}