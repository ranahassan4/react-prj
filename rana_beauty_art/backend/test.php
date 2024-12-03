<?php
// Include database connection
include 'db_connection.php';

// Retrieve image data from the database
$product_id = isset($_GET['id']) ? intval($_GET['id']) : 0; // Get product ID from URL
$query = "SELECT image FROM products WHERE id = ?";
$stmt = $con->prepare($query);
$stmt->bind_param("i", $product_id);
$stmt->execute();
$stmt->bind_result($image);
$stmt->fetch();
$stmt->close();

// Check if an image was retrieved
if ($image) {
  // Send the appropriate headers
  header("Content-Type: image/jpeg"); // Adjust if the image is a different format (e.g., image/png)
  echo $image; // Output the binary image data
} else {
  echo "No image found for the specified product ID.";
}

// Close the database connection
$con->close();
