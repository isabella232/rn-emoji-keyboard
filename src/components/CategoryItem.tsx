import * as React from 'react'
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import type { CategoryNavigationItem, CategoryTypes } from '../types'
import { Icon } from './Icon'

type CategoryItemProps = {
  item: CategoryNavigationItem
  index: number
  handleScrollToCategory: (category: CategoryTypes) => void
}

export const CategoryItem = ({ item, index, handleScrollToCategory }: CategoryItemProps) => {
  const {
    activeCategoryIndex,
    searchPhrase,
    categoryColor,
    activeCategoryColor,
    setActiveCategoryIndex,
  } = React.useContext(KeyboardContext)

  const handleSelect = () => {
    handleScrollToCategory(item.category)
    setActiveCategoryIndex(index)
  }

  const getStylesBasedOnIndex = () => {
    const style: ViewStyle[] = [styles.container]

    if (index === 0) {
      style.push({ marginLeft: 7 })
    } else if (index === 7 && searchPhrase === '') {
      style.push({ marginRight: 7 })
    } else if (index === 8 && searchPhrase !== '') {
      style.push({ marginRight: 7 })
    }
    return style
  }

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={getStylesBasedOnIndex()}>
        <Icon
          iconName={item.icon}
          isActive={activeCategoryIndex === index}
          normalColor={categoryColor}
          activeColor={activeCategoryColor}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -7,
    marginLeft: -7,
    borderRadius: 14,
  },
  icon: { textAlign: 'center' },
})
