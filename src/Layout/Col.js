import React, {Component, PropTypes} from "react";
import numberToEnglish from "../utils/numberToEnglish";
import 'semantic-ui-css/components/grid.css'
import classnames from "classnames";

export default class Col extends Component {
  static PropTypes = {
    wide: PropTypes.number,
    float: PropTypes.string
  }

  render() {
    const {wide, float, children, ...props} = this.props;

    const getClasses = (wide, float)=> {
      const column = numberToEnglish(col);
      var classes = [];
      if (column) {
        classes.push(column)
        classes.push('wide')
      }

      if (float) {
        classes.push(float)
      }

      classes.push('column')
      return classnames(classes)
    }

    return (
      <div className={getClasses(wide,float)} {...props}>
        {children}
      </div>
    )
  }
}
