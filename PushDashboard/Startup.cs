using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PushDashboard.Startup))]
namespace PushDashboard
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
