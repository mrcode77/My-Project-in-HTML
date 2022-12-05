document.getElementById("btn").addEventListener("click", function() {
    let txt = document.getElementById("input-text").value;
    cekPalindrome(txt);
});

function cekPalindrome(txt) {
    let txtNew = txt.toLowerCase().replace(/[^a-z0-9]/g, "");
    let len = txtNew.length;
    let halfLen = Math.floor(len / 2);
    let result = document.getElementById("result");
    let i;
    for (i = 0; i < halfLen; i++) {
        if (txtNew[i] !== txtNew[len - 1 - i]) {
            result.innerHTML = "Bukan Palindrome";
            return;
        }
    }
    result.innerHTML = "Benar! Ini Palindrome";
}