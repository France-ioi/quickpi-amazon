
$(".to-bottom").click(function() {
  // window.scrollTo({
  //   top: 5000,
  //   behavior: 'smooth'
  // })
});

function continueParticipation() {
   var code = $("#code").val().trim();
   if (code == "") {
      alert("Vous n'avez pas fourni de code. Pour commencer une participation, utilisez le lien en face du parcours souhaité");
   } else {
      window.open("https://concours.castor-informatique.fr?team=" + code, '_blank');
   }
}