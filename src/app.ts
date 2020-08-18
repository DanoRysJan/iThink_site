import express, { Application } from "express";

export class Server {
  private app: Application;

  private SUSAN_craig: Number;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.SUSAN_craig = 10;
  }

  async settings() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(`Server on port ${this.app.get("port")}`);
  }
}
