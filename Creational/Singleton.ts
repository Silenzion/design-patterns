class Singleton {
  private static instance : Singleton;

  private constructor() {
  }

   public static getInstance(){
       if(!Singleton.instance){

       }
       return Singleton.instance;
   }
}

export default Singleton ;