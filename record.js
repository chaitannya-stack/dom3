<script>
    document.getElementById("employeeForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Retrieve form data
      var name = document.getElementById("name").value;
      var employeeId = document.getElementById("employeeId").value;
      var department = document.getElementById("department").value;
      var experience = parseFloat(document.getElementById("experience").value);
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;
      var role = getRole(experience); // Get role based on experience

      // Create table row
      var row = document.createElement("tr");
      var rowData = [name, employeeId, department, experience, email, mobile, role];
      rowData.forEach(function(data) {
        var cell = document.createElement("td");
        cell.textContent = data;
        row.appendChild(cell);
      });

      // Create delete button
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        row.remove(); // Remove row when delete button is clicked
      });
      var deleteCell = document.createElement("td");
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append row to table body
      document.getElementById("employeeTableBody").appendChild(row);

      // Reset form
      document.getElementById("employeeForm").reset();
    });

    function getRole(experience) {
      if (experience > 5) {
        return "Senior";
      } else if (experience >= 2 && experience <= 5) {
        return "Junior";
      } else {
        return "Fresher";
      }
    }
  </script>
