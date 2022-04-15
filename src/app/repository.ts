export class Repository {

    constructor(
        public name:string,
        public description: string,
        public forks: number,
        public html_url: string,
        public created_at : Date
    
      ) {
        this.name = name;
        this.description = description;
        this.forks = forks;
        this.html_url = html_url;
        this.created_at = created_at;
    
      }
      
}
