document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
      button.addEventListener("click", function () {
          let productId = this.getAttribute("data-product-id");
          alert("Product " + productId + " added to cart!");
      });
  });
});
