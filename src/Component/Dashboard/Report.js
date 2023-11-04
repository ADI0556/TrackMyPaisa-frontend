import React from 'react';
import DownloadButton from './DownloadButton';

const Report = (props) => {
  const img = "./logo.png"; // Define the image URL
  const filename = 'sample.html'; // Specify the download filename
  console.log(props.data)
  const myData=props.data;
//   var username=props.data.users.name;
  // Create the HTML content as a string
  const htmlContent = `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
      }
      .header {
        text-align: center;
      }
      .invoice-details {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
      }
      .invoice-details div {
        width: 50%;
      }
      .invoice-table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        background-color:"#a5c1c1"
      }
      .invoice-table th, .invoice-table td {
        padding: 10px;
        text-align: left;
      }
      .invoice-table th {
        background-color: #f0f0f0;
      }
      .invoice-total {
        text-align: right;
      }
      .logo {
        margin-left: -60px;
      }
      .logo img {
        max-width: 180px;
        height: auto;
        margin-left: -60px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Expenses Invoice</h1>
      </div>
      <div class="invoice-details">
        <div>
          <h4>UserName:Shanawaz</h4>
          <h4>Email:abc@gmail.com</h4>
          <h4>Location: Bangalore</h4>
        </div>
        <div class="logo">
          <img src="${img}" alt="Company Logo">
        </div>
      </div>
      <table class="invoice-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Expense Id</th>
            <th>Category Name</th>
            <th>Expense name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        ${myData.map((item, index) => `
        <tr key="${item.id}">
          <td>${index + 1}</td>
          <td>${item.expenseId}</td>
          <td>${item.category.categoryName}</td>
          <td>${item.expenseName}</td>
          <td>${item.amount}</td>
        </tr>
      `).join('')}
        </tbody>
      </table>
      <div class="invoice-total">
        <p><strong>Total: 
        ${myData.reduce((total, item) => total + item.amount, 0)}
        </strong></p>
      </div>
    </div>
  </body>
</html>
`;

  // Define a function to trigger the download
  const downloadHtml = () => {
    // Create a Blob with the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    // Revoke the URL to free up resources
    URL.revokeObjectURL(url);
  };
  

  return (
    <div>
      <DownloadButton htmlContent={htmlContent} filename={filename} />
    </div>
  );
}

export default Report;
