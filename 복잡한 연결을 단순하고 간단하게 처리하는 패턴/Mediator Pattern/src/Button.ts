export class Button {
  private caption: string;
  private enabled: boolean;

  constructor(caption: string) {
    this.caption = caption;
    this.enabled = true;
  }

  getCaption() {
    return this.caption;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}
