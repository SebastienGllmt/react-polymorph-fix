// @flow
import React, { Component } from 'react';
import type { Node } from 'react';

// components
import { Base } from './Base';

// utility functions
import { createEmptyContext, withTheme } from '../HOC/withTheme';
import { composeTheme, addThemeId, didThemePropsChange } from '../../utils/themes';
import { numberToPx } from '../../utils/props';

// constants
import { IDENTIFIERS } from '..';
import type { ThemeContextProp } from '../HOC/withTheme';

type Props = {
  className?: string,
  children?: Node,
  context: ThemeContextProp,
  padding?: string | number,
  theme: ?Object,
  themeId: string,
  themeOverrides: Object
};

type State = { composedTheme: Object };

class GutterBase extends Component<Props, State> {
  // define static properties
  static displayName = 'Gutter';
  static defaultProps = {
    context: createEmptyContext(),
    theme: null,
    themeId: IDENTIFIERS.GUTTER,
    themeOverrides: {}
  };

  constructor(props: Props) {
    super(props);

    const { context, themeId, theme, themeOverrides } = props;

    this.state = {
      composedTheme: composeTheme(
        addThemeId(theme || context.theme, themeId),
        addThemeId(themeOverrides, themeId),
        context.ROOT_THEME_API
      )
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    didThemePropsChange(this.props, nextProps, this.setState.bind(this));
  }

  render() {
    const { children, className, themeId, padding: inlinePadding } = this.props;
    const padding = inlinePadding ? numberToPx(inlinePadding) : null;
    const theme = this.state.composedTheme[themeId];

    return (
      <Base
        activeClasses={['gutter']}
        className={className}
        inlineStyles={{ padding }}
        stylesToAdd={theme}
      >
        {children}
      </Base>
    );
  }
}

export const Gutter = withTheme(GutterBase);
