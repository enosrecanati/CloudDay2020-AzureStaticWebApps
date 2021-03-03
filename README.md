# CloudDay2020-AzureStaticWebApps

This repository contains slides and demo source code for [Cloud Day 2020](https://www.ugidotnet.org/e/1883/Cloud-Day) ["Azure Static Web Apps: what's that?"](https://www.ugidotnet.org/e/sessione/1917/Azure-Static-Web-App-what-s-that) Session.

Inside **Slides** folder, you can find the presentation used during the session, in PDF.

Inside the **Demo** folder there are (depending on the branch you are):
 - a simple angular application, inside the sub-folder **cloudday2020-demo-app**
 - a simple C# Azure Functions App, inside the sub-folder **CloudDay2020.Demo.Api**

The repository is composed of multiple branches; each of them has a specific meaning:

 - **main**: is the one deployed to Azure Static Web Apps
 - **angular-app-starter**: contains a basic angular application --> to show how configure an Azure Static Web Apps through Azure Portal
 - **angular-app-enhancement**:  adds a weather component to the previous angular application, meant to create a PR into 'main' branch --> to show Staging Environment feature
 - **routes-and-api**: contains the angular application sample modified to retrieve weather data from API and the Azure Functions App (C#) + a sample routes.json file --> to show API and Back-end routing rules features
 - **authentication-and-roles**: carries the previous version modified to require authentication --> to show authentication and roles features
