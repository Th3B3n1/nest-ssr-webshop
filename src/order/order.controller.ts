import { Controller, Get, Post, Render } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "../classes/order";
import { Address } from "../classes/address";
import { CreditCard } from "../classes/creditcard";

@Controller("order")
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    @Render("order")
    getOrder()
    {

    }

    @Post()
    async createOrder()
    {
        return await this.orderService.create(new Order("example", new Address("example", "example", "example", "example", "example"), new CreditCard("XXXX-XXXX-XXXX-XXXX", "11/2024", "555"), 1));
    }
}