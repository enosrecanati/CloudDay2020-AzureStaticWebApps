using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace CloudDay2020.Demo.Api
{
    public static class GetWeathetForecastFunction
    {
        [FunctionName("GetWeathetForecastFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "weather")] HttpRequest req,
            ILogger log)
        {
            return await Task.Run(() =>
            {
                log.LogInformation("C# HTTP trigger function processed a request.");
            
                var randomNumber = new Random();
                var temp = 0;

                var weatherForecast = Enumerable.Range(0, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = temp = randomNumber.Next(-20, 55),
                    Summary = GetSummary(temp)
                }).ToArray();
                
                return new OkObjectResult(weatherForecast);
            });
        }

        private static string GetSummary(int temp)
        {
            var summary = "Mild";

            if (temp >= 32)
            {
                summary = "Vey Hot";
            }
            else if (temp <= 16 && temp > 0)
            {
                summary = "Cold";
            }
            else if (temp <= 0)
            {
                summary = "Freezing";
            }

            return summary;
        }

        public class WeatherForecast
        {
            public DateTime Date { get; set; }
            
            public string Summary { get; set; }

            public int TemperatureC { get; set; }
            
            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }
    }
}
