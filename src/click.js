import React from 'react';
class MyComponent extends React.Component {
    render() {
      return (
        <div onClick={this.handleClick}>
          <input ref={input => this.inputElement = input} />
        </div>
      );
    }
  
    handleClick = (e) => {
      this.inputElement.click();
    }
  }
  export default MyComponent;