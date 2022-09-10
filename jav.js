<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Task</title>
  </head>
  <body>
    <header style="text-align: center">Welcome To My Site</header>
    <h1>Fill the Form</h1>
    <div class="main">
      <div class="form">
        <h4 style="text-align: center">Register Form</h4>
        <form id="user-form">
          <label for="name">Name : </label>
          <input required type="text" name="name" id="name" />
          <br />
          <label for="email">Email : </label>
          <input required type="email" name="email" id="email" />
          <br />
          <label for="password">Password : </label>
          <input required type="password" name="password" id="password" /><br />
          <label for="dob">DOB : </label>
          <input type="date" name="dob" id="dob" required />
          <br />
          <input
            style="width: 40px"
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
          />
          <label for="acceptTerms">Accept terms & Conditions</label>
          <br /><br />
          <input
            style="background-color: rgb(19, 151, 19); color: white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
    <div id="entrytbale"></div>
    <script src="./scriptjs.js"></script>
  </body>
</html>