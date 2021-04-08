import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Text} from '@src/components/elements';

storiesOf('Text', module)
  .add('Basic text', () => (
    <View style={{padding: 10}}>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
    </View>
  ))
  .add('Primary text', () => (
    <View style={{padding: 10}}>
      <Text isPrimary>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
    </View>
  ));
