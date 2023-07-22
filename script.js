function generateGothicName() {
    const motherName = document.getElementById("motherName").value.trim().toLowerCase();
    const fatherName = document.getElementById("fatherName").value.trim().toLowerCase();
  
    if (motherName.length !== 2 || fatherName.length !== 2) {
      alert("Please enter exactly two letters for both mother's and father's names.");
      return;
    }
  
    const gothicName = motherName.substr(0, 2) + fatherName.substr(0, 2) + "ix";
    document.getElementById("gothicName").innerText = gothicName.toUpperCase();
  }
  