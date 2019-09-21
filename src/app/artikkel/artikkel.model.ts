export class Artikkel {
  pealkiri: string;
  link: string;
  haaled: number;

  constructor(pealkiri: string, link: string, haaled?: number) {
    this.pealkiri = pealkiri;
    this.link = link;
    this.haaled = haaled || 0;
  }

  ulesHaaleta(): void {
    this.haaled += 1;
  }

  allaHaaleta(): void {
    this.haaled -= 1;
  }

  domeen(): string {
    try {
      const domeenJaTee: string = this.link.split('//')[1];
      return domeenJaTee.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
