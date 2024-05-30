import { NestFactory } from "@nestjs/core";
import * as http from "http";
import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "@/server/app.module";

// Do not modify this code.
class Main {
  private static app: INestApplication;

  static async getApp(): Promise<INestApplication> {
    if (!this.app) {
      this.app = await NestFactory.create(AppModule, { bodyParser: false });
      this.app.setGlobalPrefix("api");
      await this.app.init();
    }

    return this.app;
  }

  static async getListener(): Promise<NextApiHandler> {
    const app = await this.getApp();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners("request") as NextApiHandler[];

    return listener;
  }
}

export default Main;
