import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public categories :string[] =['Select a Category', 'Electronics', 'Footwear', 'Fashion'];
  public electronics :string[] = ['Select Electronics', 'JBL Speaker', 'Earpods'];
  public footwear :string[] = ['Select Footwear', 'Nike Casuals', 'Lee Cooper Boot'];
  public fashion = ['Select Fashion', 'Shirt', 'Jeans'];
  public data = [
   {Name: 'JBL Speaker', Price: 4500.55, Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
   {Name: 'Earpods', Price: 3000.44, Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
   {Name: 'Nike Casuals', Price: 6000.44, Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
   {Name: 'Lee Cooper Boot', Price: 2000.44, Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
   {Name: 'Shirt', Price: 1000.44, Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
   {Name: 'Jeans', Price: 4000.44, Photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"},
  ];
  public products :string[] = [];
  public selectedCategoryName = 'Select a Category';
  public selectedProductName:any;
  public searchResults:any=[];
  public searchedProduct = {
    Name: '',
    Price: 0,
    Photo: ''
  };
  public cartItems:any = [];
  public cartItemsCount = 0;
  public showCart = false;
 public GetCartItemsCount(){
     this.cartItemsCount = this.cartItems.length;
   }
   public OnCategoryChange(){
     console.log(this.selectedCategoryName);
    switch(this.selectedCategoryName)
     {
       case 'Electronics':
          this.products = this.electronics;
          break;
        case 'Footwear':
          this.products = this.footwear;
          break;
        case 'Fashion':
          this.products = this.fashion;
          break;
        default:
          this.products = ['Select a Category'];
          break;
      }
   }
   public onProductChanged(){
       this.searchResults = this.data.filter(x=>x.Name==this.selectedProductName);
       console.log(this.searchResults);
       this.searchedProduct = {
         Name: this.searchResults[0].Name,
         Price: this.searchResults[0].Price,
         Photo: this.searchResults[0].Photo
       };
   }
   public AddToCartClick() {
      this.cartItems.push(this.searchedProduct);
     alert('Item Added to Cart');
      this.GetCartItemsCount();
    }
    public ToggleCartDisplay() {
      this.showCart = (this.showCart==false)?true:false;
    }
   public DeleteCartItem(index:any){
      let confirmDelete = confirm('Are you sure, want to Delete?');
      if(confirmDelete==true) {
        this.cartItems.splice(index, 1);
        this.GetCartItemsCount();
      }
   }
 
}
