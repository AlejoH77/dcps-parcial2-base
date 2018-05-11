import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    delete(post){
      var answer = confirm("Do you desire delete this post?");
      if (answer == true) {
        post.deleteRecord();
        post.get('isDeleted');
        post.save();
        alert("Se ha borrado exitosamente");
        this.transitionToRoute('authors.author', post.author);
      }

    }
  }
});
