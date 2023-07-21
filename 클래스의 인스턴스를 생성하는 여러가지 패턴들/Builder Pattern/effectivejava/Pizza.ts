export abstract class Pizza {

  abstract static class Builder {}
  
Pizza(Builder builder) {
  toppings = builder.toppings.clone(); 
}

}