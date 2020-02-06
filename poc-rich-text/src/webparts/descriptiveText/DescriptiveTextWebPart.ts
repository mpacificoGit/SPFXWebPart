import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DescriptiveTextWebPartStrings';
import DescriptiveText from './components/DescriptiveText';
import { IDescriptiveTextProps } from './components/IDescriptiveTextProps';

export interface IDescriptiveTextWebPartProps {
  description: string;
  descriptiveText: string;
}

export default class DescriptiveTextWebPart extends BaseClientSideWebPart<IDescriptiveTextWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDescriptiveTextProps > = React.createElement(
      DescriptiveText,
      {
        description: 'Description from ts file'
        ,descriptiveText: this.properties.descriptiveText
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
                , PropertyPaneTextField('descriptiveText', {
                  label: strings.DescriptiveTextLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected onBeforeSerialize(): void {
    super.onBeforeSerialize();
    // modify the web part's properties here - the modified version will be saved
    this.properties.description = this.properties.descriptiveText;
}

protected get disableReactivePropertyChanges(): boolean {
  return true;
}

private onTextChange = (newText: string) => {
  this.properties.descriptiveText = newText;
  return newText;
}

}
