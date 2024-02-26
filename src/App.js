import React from 'react';
import './App.css';
import Board from './components/Board';
import '@radix-ui/themes/styles.css'
import { Flex, Grid, Separator } from "@radix-ui/themes";
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';




function App() {
  const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ));
  
  const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ));
  
  return (
    <div className='container'>
    <div className="App">
      <Grid columns="5" style={{gridTemplateColumns:'2fr 0fr 8fr 0fr 2fr'}} m='4' gap='4'>
        <Flex direction='column' gap='3'/>
        <Separator orientation='vertical' size='4' />
        <div className='board'>
          <Board></Board>
        </div>
        <Separator orientation='vertical' size='4' />
          <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>What technologies did you use for this project?</AccordionTrigger>
              <AccordionContent>
                I used Javascript and React to build the chessboard and frontend. The engine itself is a combination of a minimax algorithm and a 
                TensorFlow Sequential model.
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger>How strong is the engine?</AccordionTrigger>
              <AccordionContent>
                As of now, the engine plays strongly favouring material advantage. The model is able to incorporate positional play into account. Overall,
                the model would be rated around 600 ELO.
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
      </Grid>
    </div>
    </div>
  );
}

export default App;
