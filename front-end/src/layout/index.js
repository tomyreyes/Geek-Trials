import { View } from 'react-native'
import React from 'react'
import propTypes from 'prop-types'

const Layout = ({ children }) => <View>{children}</View>

Layout.propTypes = {
  children: propTypes.element.isRequired,
}

export default Layout
