import express, { Application } from "express";

export class Server {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
  }

  async settings() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(`Server on port ${this.app.get("port")}`);
  }
}
