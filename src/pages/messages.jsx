import React from 'react';
import { Navbar, Page, Messages, MessagesTitle, Message, Messagebar, Link, MessagebarAttachments, MessagebarAttachment, MessagebarSheet, MessagebarSheetImage } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attachments: [],
      sheetVisible: false,
      typingMessage: null,
      messageText: '',
      messagesData: [
        {
          type: 'sent',
          text: 'Hi, Anne',
        },
        
        {
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Nice to meet you! Need any help today?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
		{
          type: 'sent',
          text: 'Yes',
        },
        {
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Great! Were you interested in buying insurance? Or maybe you want to make a claim?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          type: 'sent',
          text: 'I\'m making a claim on my car insurance',
        },
		{
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'We, here at Legacy Insurance hope your health is in good condition.',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
		{
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Could you please explain what happened?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          type: 'sent',
          text: 'Sending audio transciption for "My car accident testimony" ',
        },
        {
          type: 'sent',
          image: 'https://image.flaticon.com/icons/svg/1323/1323979.svg',

        },
		{
          type: 'sent',
          text: 'Automated Audio Transcription: So, the accident happened early in the morning. I was driving on a residential street and stopped at a red light. Suddenly, a car hits the back right side of my car and I fly into my steering wheel. Thankfully, I didn\'t slam too hard, but my neck did ache for a while afterwards. I exchanged information, took some pictures in the app, and we both drove away. There was a policeman nearby who wrote a small report of the incident for us.',
        },
        {
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Thank you for your testimonial. I\'ll make sure to keep that safely stored in our records',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Could you describe each of the images you took?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Insurance Agent Anne',
          type: 'received',
          text: 'Starting with accident001.jpg',
		  image: 'https://s.yimg.com/ny/api/res/1.2/akae8xo_zCf5JIShV.I2uA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-GB/homerun/motor1_uk_340/72dc54dd7c3cbab93b00c91904f34c69',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
		{
          type: 'sent',
          image: 'https://image.flaticon.com/icons/svg/1323/1323979.svg',

        },
		{
          type: 'sent',
          text: 'Automated Audio Transcription: This is the back, right side of my bumper. There\'s a huge dent and scratches that were not there before.',
        },
      ],
      images: [
		'https://miro.medium.com/max/300/0*VkB8BSFmQctYbO2l.',
		'https://image.flaticon.com/icons/svg/1323/1323979.svg',
		'https://image.flaticon.com/icons/svg/1323/1323979.svg',
		'https://image.flaticon.com/icons/svg/1323/1323979.svg',
		'https://s.yimg.com/ny/api/res/1.2/akae8xo_zCf5JIShV.I2uA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-GB/homerun/motor1_uk_340/72dc54dd7c3cbab93b00c91904f34c69',
		
      ],
      people: [
        {
          name: 'Insurance Agent Anne',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Insurance Agent Anne',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
      ],
      answers: [
        'And how about accident002.jpg?',
		
      ],
      responseInProgress: false,
    }
  }
  render() {
    return (
      <Page style={{height:'94%'}}>
        <Navbar title="Messages" backLink="Back"></Navbar>

        <Messagebar
          placeholder={this.placeholder}
          ref={(el) => {this.messagebarComponent = el}}
          attachmentsVisible={this.attachmentsVisible}
          sheetVisible={this.state.sheetVisible}
          value={this.state.messageText}
          onInput={(e) => this.setState({messageText: e.target.value})}
        >
          <Link
            iconIos="f7:mic_circle"
            iconAurora="f7:mic_circle"
            iconMd="material:mic"
            slot="inner-start"
            onClick={() => {this.setState({sheetVisible: !this.state.sheetVisible})}}
          ></Link>
          <Link
            iconIos="f7:arrow_up_circle_fill"
            iconAurora="f7:arrow_up_circle_fill"
            iconMd="material:send"
            slot="inner-end"
            onClick={this.sendMessage.bind(this)}
          ></Link>
          <MessagebarAttachments>
            {this.state.attachments.map((image, index) => (
              <MessagebarAttachment
                key={index}
                image={image}
                onAttachmentDelete={() => this.deleteAttachment(image)}
              ></MessagebarAttachment>
            ))}
          </MessagebarAttachments>
          <MessagebarSheet>
            {this.state.images.map((image, index) => (
              <MessagebarSheetImage
                key={index}
                image={image}
                checked={this.state.attachments.indexOf(image) >= 0}
                onChange={this.handleAttachment.bind(this)}
              ></MessagebarSheetImage>
            ))}
          </MessagebarSheet>
        </Messagebar>

        <Messages ref={(el) => {this.messagesComponent = el}}>
          <MessagesTitle><b>Sunday, Feb 9,</b> 12:58</MessagesTitle>

          {this.state.messagesData.map((message, index) => (
            <Message
              key={index}
              type={message.type}
              image={message.image}
              name={message.name}
              avatar={message.avatar}
              first={this.isFirstMessage(message, index)}
              last={this.isLastMessage(message, index)}
              tail={this.isTailMessage(message, index)}
            >
              {message.text && (
                <span slot="text" dangerouslySetInnerHTML={{__html: message.text}} />
              )}
            </Message>
          ))}
          {this.state.typingMessage && (
            <Message
              type="received"
              typing={true}
              first={true}
              last={true}
              tail={true}
              header={`${this.state.typingMessage.name} is typing`}
              avatar={this.state.typingMessage.avatar}
            ></Message>
          )}
        </Messages>
      </Page>
    )
  }

  get attachmentsVisible() {
    const self = this;
    return self.state.attachments.length > 0;
  }
  get placeholder() {
    const self = this;
    return self.state.attachments.length > 0 ? 'Add comment or Send' : 'Message';
  }
  componentDidMount() {
    const self = this;
    self.$f7ready(() => {
      self.messagebar = self.messagebarComponent.f7Messagebar;
      self.messages = self.messagesComponent.f7Messages;
    });
  }
  isFirstMessage(message, index) {
    const self = this;
    const previousMessage = self.state.messagesData[index - 1];
    if (message.isTitle) return false;
    if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
    return false;
  }
  isLastMessage(message, index) {
    const self = this;
    const nextMessage = self.state.messagesData[index + 1];
    if (message.isTitle) return false;
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
    return false;
  }
  isTailMessage(message, index) {
    const self = this;
    const nextMessage = self.state.messagesData[index + 1];
    if (message.isTitle) return false;
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
    return false;
  }
  deleteAttachment(image) {
    const self = this;
    const attachments = self.state.attachments;
    const index = attachments.indexOf(image);
    attachments.splice(index, 1);
    self.setState({ attachments });
  }
  handleAttachment(e) {
    const self = this;
    const attachments = self.state.attachments;
    const index = self.$$(e.target).parents('label.checkbox').index();
    const image = self.state.images[index];
    if (e.target.checked) {
      // Add to attachments
      attachments.unshift(image);
    } else {
      // Remove from attachments
      attachments.splice(attachments.indexOf(image), 1);
    }
    self.setState({ attachments });
  }
  sendMessage() {
    const self = this;
    const text = self.state.messageText.replace(/\n/g, '<br>').trim();
    const messagesToSend = [];
    self.state.attachments.forEach((attachment) => {
      messagesToSend.push({
        image: attachment,
      });
    });
    if (text.length) {
      messagesToSend.push({
        text,
      });
    }
    if (messagesToSend.length === 0) {
      return;
    }

    self.setState({
      // Reset attachments
      attachments: [],
      // Hide sheet
      sheetVisible: false,
      // Send message
      messagesData: [...self.state.messagesData, ...messagesToSend],
      // Clear
      messageText: '',
    });

    // Focus area
    if (text.length) self.messagebar.focus();

    // Mock response
    if (self.state.responseInProgress) return;
    self.setState({
      responseInProgress: true,
    })
    setTimeout(() => {
      const answer = self.state.answers[Math.floor(Math.random() * self.state.answers.length)];
      const person = self.state.people[Math.floor(Math.random() * self.state.people.length)];
      self.setState({
        typingMessage: {
          name: person.name,
          avatar: person.avatar,
        },
      });
      setTimeout(() => {
        self.setState({
          messagesData: [...self.state.messagesData, {
            text: answer,
            type: 'received',
            name: person.name,
            avatar: person.avatar,
          }],
          typingMessage: null,
          responseInProgress: false,
        });
      }, 4000);
    }, 1000);
  }
};
