import React, {Component, PropTypes} from "react";
import numberToEnglish from '../utils/numberToEnglish'
import 'semantic-ui-css/components/grid.css'
import classnames from 'classnames'


export default class Row extends Component {
  static PropTypes = {
    col: PropTypes.number
  }

  render() {
    const {col, children, ...props} = this.props;

    const getClasses = (col)=> {
      const column = numberToEnglish(col);
      var classes = [];
      if (column) {
        classes.push(column)
        classes.push('column')
      }

      classes.push('row')

      return classnames(classes)
    }

    return (
      <div className={getClasses(col)} {...props}>
        {children}
      </div>
    )
  }
}
