import React from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Creator from "../Creator/Creator.js"
import { settings } from "../../data/dataStore";

class Column extends React.Component {
  state = {
    cards: this.props.cards || []
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array
  };

  static defaultProps = { cards: [] }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          }
        ]
      }
    ));
  }


  render() {
    console.log('this', this);

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}
        </h3>
       
       {
         this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))
       }

      <Creator
      text={settings.cardCreatorText}
      action={(title) => this.addCard(title)}
      />

      </section>
    );
  }
}

export default Column;
