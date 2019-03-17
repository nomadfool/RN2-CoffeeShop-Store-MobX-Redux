import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CoffeeStore {
  coffeeShops = null;
  coffeeShop = null;
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const coffeeShops = res.data;
      this.coffeeShops = coffeeShops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  coffeeShops: observable,
  coffeeShop: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
