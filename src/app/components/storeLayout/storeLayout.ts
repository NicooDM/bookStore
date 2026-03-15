import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../shared/navbar/navbar";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-store-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './storeLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreLayout { }
