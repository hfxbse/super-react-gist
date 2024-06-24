import React from 'react';
import Gist from './index'

export default {
  title: 'Gist',
  component: Gist,
  parameters: {
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    url: {control: 'text'},
  },
  args: {
    LoadingComponent: () => <strong>Custom loading component...</strong>
  }
};

export const SingleFile = {
  args: {
    url: 'https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js',
  },
};

export const MultipleFiles = {
  render: () => <>
    <Gist
      url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-start-js'
      LoadingComponent={() => <strong>Custom loading component...</strong>}
    />
    <Gist
      url='https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df#file-multiple-js'
      LoadingComponent={() => <strong>Custom loading component...</strong>}
    />
  </>
}

export const CamelCaseFileName = {
  args: {
    url: 'https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df',
    file: 'CaMelCase.js'
  },
};

export const WholeGist = {
  args: {
    url: 'https://gist.github.com/GeorgeGkas/5f55a83909a3f5b766934ffe802d30df'
  }
}

export const CustomErrorComponent = {
  args: {
    url: 'https://gist.github.com/GeorgeGkas/5f55a83909a3f5b7tyjty66934ffedd802d30df#file-multiple-js',
    ErrorComponent: () => <strong>Gist failed to load.</strong>
  }
}
