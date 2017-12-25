var aProductDollar = ""
var aProductAmount = "1"
var aProductWeight = ""
var aProductDollar2Unit = ""
var aProductUnit2Dollar = ""
var cheapProduct = ""
var bProductDollar = ""
var bProductAmount = "1"
var bProductWeight = ""
var bProductDollar2Unit = ""
var bProductUnit2Dollar = ""

$(".aProductDollar").bind("change", function() {
    aProductDollar = $(this).val()
    aCalcAmount()
    compareAB()
})

$(".aProductAmount").bind("change", function() {
    aProductAmount = $(this).val()
    aCalcAmount()
    compareAB()
})

$(".aProductWeight").bind("change", function() {
    aProductWeight = $(this).val()
    aCalcAmount()
    compareAB()
})

$(".bProductDollar").bind("change", function() {
    bProductDollar = $(this).val()
    bCalcAmount()
    compareAB()
})

$(".bProductAmount").bind("change", function() {
    bProductAmount = $(this).val()
    bCalcAmount()
    compareAB()
})

$(".bProductWeight").bind("change", function() {
    bProductWeight = $(this).val()
    bCalcAmount()
    compareAB()
})

function aCalcAmount() {
    if (aProductDollar != "" && aProductAmount != "" && aProductWeight != "") {
      aProductDollar2Unit=(aProductWeight * aProductAmount) / aProductDollar
      aProductUnit2Dollar=aProductDollar / (aProductWeight * aProductAmount)
        $(".aProductDollar2Unit").html(aProductDollar2Unit)
        $(".aProductUnit2Dollar").html(aProductUnit2Dollar)
    }else{
      aProductDollar2Unit=""
      aProductUnit2Dollar=""
      $(".aProductDollar2Unit").html(aProductDollar2Unit)
      $(".aProductUnit2Dollar").html(aProductUnit2Dollar)
    }
}

function bCalcAmount() {
    if (bProductDollar != "" && bProductAmount != "" && bProductWeight != "") {
      bProductDollar2Unit=(bProductWeight * bProductAmount) / bProductDollar
      bProductUnit2Dollar=bProductDollar / (bProductWeight * bProductAmount)
        $(".bProductDollar2Unit").html(bProductDollar2Unit)
        $(".bProductUnit2Dollar").html(bProductUnit2Dollar)
    }else{
      bProductDollar2Unit=""
      bProductUnit2Dollar=""
      $(".bProductDollar2Unit").html(bProductDollar2Unit)
      $(".bProductUnit2Dollar").html(bProductUnit2Dollar)
    }
}

function compareAB(){
  if(aProductDollar2Unit !="" && bProductDollar2Unit !=""){
    if(aProductDollar2Unit > bProductDollar2Unit){
      $(".cheapProduct").html($(".aProductName").html());
    }else{
      $(".cheapProduct").html($(".bProductName").html());
    }
  }else{
    $(".cheapProduct").html("");
  }
}
