import * as React from 'react';
import styles from './DescriptiveText.module.scss';
import { IDescriptiveTextProps } from './IDescriptiveTextProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";
import { StyleOptions } from "@pnp/spfx-controls-react/lib/RichText";
import { Environment, EnvironmentType, DisplayMode } from '@microsoft/sp-core-library';



export interface IDefaultData
{
  description: string;
  descriptiveText: string;
}

const styleProps: Partial<StyleOptions> =
    {
    showBold:true,
    showItalic:true,
    showUnderline:true,
    showMore:false
    };

export default class DescriptiveText extends React.Component <IDescriptiveTextProps, IDefaultData> {
  
  public constructor(props: IDescriptiveTextProps,state: IDefaultData){ 
    super(props); 
    this.state = { 
      description: 'Please enter your text for your page'
      ,descriptiveText:'Please enter your text for your page'
       
    }; 
  } 
   
  
  public render(): React.ReactElement<IDescriptiveTextProps> {
    
    
    
    return(
      <div className = { styles.descriptiveText } >
  <RichText value={this.props.descriptiveText} isEditMode={true} styleOptions={styleProps} 
          onChange={(text)=>this.onChange(text)}
/>
      </div >
    );
  }

  private onChange = (newText:string) => {  
    this.setState({
      descriptiveText: newText
    })

    this.setState({
      description: newText
    })

    
    return newText;  
    }

  private onSubmit():void {  
      //save properties?
  
      
      }

  
private checkPageMode():void
{
  //started to try implementing this piece

  if(this.displayMode == DisplayMode.Edit){


    //edit mode  
    }
    
    
    else if(this.displayMode == DisplayMode.Read){
    
    
    //read mode  
    
    
    }
    

}//end of function
  
} //end of class

