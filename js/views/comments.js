var React = require('react');
var CommentStore = require('../stores/comment-store');

function getStateFromCommentStore() {
  return {
    comments: CommentStore.getAll()
  }
}

var Comments = React.createClass({

  onChange: function() {
    this.setState(getStateFromCommentStore());
  },

  getInitialState: function() {
    return getStateFromCommentStore();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this.onChange);
  },

  render: function() {
    var comments = this.state.comments.map(function(comment, index){
      return (
        <div className='comment' key={'comment-' + index}>
          {comment.text}
        </div>
      )
    });

    return (
      <div className='comments'>
        {comments}
      </div>
    );
  }
});

module.exports = Comments;
