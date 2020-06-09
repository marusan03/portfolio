import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    var json = require('./data/skills.json');
    const skills = [];
    for (var key in json['skills']) {
      skills.push(
        <Skill
          key={key}
          type={json['skills'][key]['type']}
          skill={json['skills'][key]['skill']}
          sentence={json['skills'][key]['sentence']}
        />
      );
    }
    this.state = { skills: skills };
  }

  render() {
    return <CardColumns>{this.state.skills}</CardColumns>;
  }
}

const Skill = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.type}</Card.Header>
      <Card.Body>
        <Card.Title>{props.skill}</Card.Title>
        <Card.Text>{props.sentence}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Skill.propTypes = {
  type: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
};
