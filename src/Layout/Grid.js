import React, {Component, PropTypes} from "react";
import numberToEnglish from '../utils/numberToEnglish'
import classnames from 'classnames'
import 'semantic-ui-css/components/grid.css'
import _ from 'lodash'

export default class Grid extends Component {
  static propTypes = {
    col: PropTypes.number,
    equal: PropTypes.bool,
    align: PropTypes.string,
    stack: PropTypes.bool,
    relax: PropTypes.bool
  }

  render() {
    const getClassNames = (col, equal, align, stack, relax)=> {
      const column = numberToEnglish(col);
      var classNames = ['ui']

      if (relax) {
        classNames.push('relaxed')
      }

      if (equal) {
        classNames.push('equal')
        classNames.push('width')
      }

      if (stack) {
        classNames.push('stackable')
      }

      if (align) {
        const aligns = {
          center: 'centered',
          right: ['right', 'aligned'],
          left: ['left', 'aligned']
        }
        classNames = _.concat(classNames, aligns[align])
      }

      if (column) {
        classNames.push(column)
        classNames.push('column')
      }

      classNames.push('grid')

      return classnames(classNames)
    }

    const {col, equal, align, stack, relax, children, ...props} = this.props;

    return (
      <div className={getClassNames(col, equal, align, stack, relax)} {...props}>
        {children}
      </div>
    )
  }
}
