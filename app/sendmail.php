<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
 function send_mail($to, $subject, $message, $headers)
 {

   

  
  
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $question = $_POST["question"];
  $tarif = $_POST["tarif"];
  $add = $_POST["add"];





  
  
  
  $to  = "1unitedcrew@gmail.com";  

  if (isset($question)) {
    $message = "Телефон: $phone<br>Email: $email<br>Вопрос: $question";
  } else if (isset($tarif)) {
    $message = "Телефон: $phone<br>Тариф: $tarif";
  } else {
    $message = "Телефон: $phone<br>$add";
  }

  $subject = "Заявка с сайта"; 

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

  $result = mail($to, $subject, $message, $headers);
} 

{
    // Отправка email
  send_mail($to, $subject, $message, $headers);      
  echo 'true'; 
}

}
?>