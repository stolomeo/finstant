<a name="readme-top"></a>

<div align="center">

  <h3 align="center">Finstant</h3>

  <p align="center">
    Your source for financial documents, untainted by fear-mongering or fake news
  </p>
</div>
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

[![Screenshot of Finstant][product-screenshot]]()

Finstant is a full-stack web application designed to empower investors by providing streamlined access to essential financial documents, without the clutter of short-term data. This platform not only facilitates efficient financial research but also allows users to manage and review their stock portfolios interactively.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [React](https://react.dev/)
- [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet/apis)
- [Entity Framework](https://learn.microsoft.com/en-us/ef/)
- [SQL Server (MSSQL)](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Tailwind CSS](https://tailwindcss.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/en)
- **.NET Core SDK** [Download .NET Core](https://dotnet.microsoft.com/en-us/download)
- **Microsoft SQL Server** [Download SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- **A free API key from** [https://site.financialmodelingprep.com/](https://site.financialmodelingprep.com/)

### Cloning the Repository

Start by cloning the repository to your local machine:

```sh
git clone https://github.com/stolomeo/finstant.git
cd finstant
```

### Setting Up the Backend

1. **Setup User Secrets**: This project uses user secrets to store sensitive data such as the database connection string, JWT signing key, and the [Financial Modeling Prep](https://site.financialmodelingprep.com/) API key

   - Navigate to the `api` directory:

     ```sh
     cd api
     ```

   - Initialize user secrets:

     ```sh
     dotnet user-secrets init
     ```

   - Set the required secrets:

     ```sh
     dotnet user-secrets set "DbPassword" "your_password"
     dotnet user-secrets set "JWT:SigningKey" "your_jwt_signing_key"
     dotnet user-secrets set "FMPKey" "your_fmp_api_key"
     ```

   - In your `api/appsettings.json`, update the `ConnectionStrings.DefaultConnection` to connect to your SQL server:

     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=your_database;User Id=your_user;"
     }
     ```

2. **Database Setup**:

   - Update your database using Entity Framework migrations (ensure you have EF tool installed):

     ```sh
     dotnet ef database update
     ```

3. **Start the Server**:

   - Run the server locally:

     ```sh
     dotnet watch run
     ```

### Setting Up the Frontend

1. **Install Dependencies**:

   - Navigate to the `client` directory:

     ```sh
     cd client
     ```

   - Install packages:

     ```sh
     npm install
     ```

2. **Setup Environment Variables**:

   - Create a `.env` file

     ```sh
     touch .env
     ```

   - Add your FMP API key like so

     ```yaml
     VITE_FINANCIAL_MODELING_PREP_API_KEY=your_api_key
     ```

3. **Start the App**:

   - Run the server locally:

     ```sh
     npm run dev
     ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [ASP.NET Core documentation](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0)
- [Entity Framework documentation hub](https://learn.microsoft.com/en-us/ef/)
- [Financial Modeling Prep API](https://site.financialmodelingprep.com/developer/docs)
- [How to implement JWT authentication in ASP.NET Core](https://www.infoworld.com/article/3669188/how-to-implement-jwt-authentication-in-aspnet-core.html)
- [Quickstart: Use Azure Data Studio to connect and query SQL Server](https://learn.microsoft.com/en-us/azure-data-studio/quickstart-sql-server)
- [React Hook Form](https://react-hook-form.com/)
- [Safe storage of app secrets in development in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-8.0&tabs=linux)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Vite](https://vitejs.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: preview.png
