<?php
// // Include the database connection file
// include('db_connection.php');

// // Fetch Wedding Rings from the database
// $query = "SELECT * FROM products WHERE category= 'wedding ring' ";
// $result = $con->query($query);


// if (!empty($result)) {
//   foreach ($result as $row) {
//     $name = $row['name'];
//     $image = $row['image'];
//     $price = $row['price'];
//     $rating = 4.5; // Default rating (modify if rating is in DB)

//     // Generate stars for the rating
//     $filledStars = floor($rating);
//     $halfStar = ($rating - $filledStars >= 0.5) ? 1 : 0;
//     $emptyStars = 5 - ($filledStars + $halfStar);

//     $starsHTML = str_repeat("★", $filledStars);
//     if ($halfStar) {
//       $starsHTML .= "½";
//     }
//     $starsHTML .= str_repeat("☆", $emptyStars);

// echo "
//             <div class='ring-item'>
//               <img src='uploads/{$image}' alt='{$name}' class='ring-img'>
//               <div class='ring-info'>
//                 <p class='ring-name'>{$name}</p>
//                 <p class='ring-price'>USD {$price}</p>
//                 <p class='ring-rating'>{$starsHTML} ({$rating})</p>
//                 <button class='btn'>
//                   <a href='#'>Add to Cart</a>
//                 </button>
//               </div>
//             </div>
//           ";

echo "
          <div class='ring-item'>
            <img src='../src/assets/ProductImages/Bracelets/bracelets.jpg' alt='name' class='ring-img'>
            <div class='ring-info'>
              <p class='ring-name'>ahmad</p>
              <p class='ring-price'>USD 3</p>
              
              <button class='btn'>
                <a href='#'>Add to Cart</a>
              </button>
            </div>
          </div>
        ";

//   }
// } else {
//   echo "<p>No wedding rings available!</p>";
//   echo "rana";
// }

// // Close database connection
// mysqli_close($con);
