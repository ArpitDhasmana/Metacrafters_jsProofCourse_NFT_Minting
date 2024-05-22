let nfts=[];

function mintNFT(name_nft,artist_name,year,price_nft) {
  const nft={
    name: name_nft,
    artist: artist_name,
    yearOfCreation: year,
    price: price_nft
  };
  nfts.push(nft);
}

function listNFTs () {
    for(let i=0;i<nfts.length;i++){
        console.log("NFT_Number "+(i+1));
        console.log("NFT Name , Artist Name, Year of Creation, Price of NFT");
        console.log(nfts[i]["name"]+" , "+ nfts[i]["artist"]+" , "+nfts[i]["yearOfCreation"]+" , "+ nfts[i]["price"]);
    }
}
function getTotalSupply() {
 return nfts.length;
}
mintNFT("Mona Lisa","Leonardo da Vinci","1503","priceless");
mintNFT("The Starry Night", "Vincent van Gogh","1889","$100 million");
mintNFT("The Persistence of Memory","Salvador Dali","1931","$150 million");

listNFTs();
console.log("Total:"+getTotalSupply());

