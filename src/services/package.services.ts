import { Package } from "types/packages.types";
import axios, { AxiosResponse } from "axios";

export class PackageServices {
  static getAllPackages(): Promise<Package[]> {
    return Promise.resolve(
      require("../mocks/items.json").packages as Package[]
    );
  }
}
