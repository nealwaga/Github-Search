export class User {
    constructor (
        public name:string,
        public public_repo:number,
        public avatar_url: string,
        public login:string,
        public company:string,
        public created_at:Date,
        public following:number,
        public followers:number,
        public html_url:string
      ) {
        this.name = name;
        this.public_repo = public_repo;
        this.avatar_url = avatar_url;
        this.login = login;
        this.company = company;
        this.created_at = created_at;
        this.following = following;
        this.followers = followers;
        this.html_url = html_url;
    
      }
}
