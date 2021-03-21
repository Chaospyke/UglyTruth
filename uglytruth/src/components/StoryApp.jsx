import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Image } from "react-bootstrap";

class StoryApp extends Component {
  constructor(props) {
    super(props);

    this.state.displayData = this.state.fetchedData.find((e) => {
      return parseInt(e.id) === parseInt(this.props.match.params.storyId);
    });
    this.state.titleData.titleName = this.state.fetchedData.find((e) => {
      return parseInt(e.id) === parseInt(this.props.match.params.storyId);
    }).title;
  }

  state = {
    titleData: {
      id: null,
      titleName: "Story",
      SearchBool: false,
      SearchFunc: null,
      parentCallBack: null,
    },
    fetchedData: [
      {
        key: 1,
        id: 3343,
        title: "True Story 1",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "Youtube Link",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "News Paper 1",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 4",
          },
        ],
      },
      {
        key: 2,
        id: 2247,
        title: "Honest Story 2",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 4",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "News Paper 1",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 4",
          },
          {
            key: 5,
            relevance: 5,
            source: "News Paper 3",
          },
          {
            key: 6,
            relevance: 6,
            source: "News Paper 3",
          },
          {
            key: 7,
            relevance: 7,
            source: "Youtube Link",
          },
        ],
      },
      {
        key: 3,
        id: 3679,
        title: "Fake Story 3",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 3",
          },
          {
            key: 2,
            relevance: 2,
            source: "News Paper 1",
          },
          {
            key: 3,
            relevance: 3,
            source: "News Paper 1",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 4",
          },
        ],
      },
      {
        key: 4,
        id: 4081,
        title: "False Story 4",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
          {
            key: 4,
            order: 4,
            paragraph:
              "Integer vel viverra urna, vehicula volutpat leo. Nulla porttitor, nunc ac pharetra vehicula, ex metus condimentum ipsum, et ullamcorper ex tellus ut nisl. Phasellus lacinia odio sit amet augue dignissim, et bibendum nisl commodo. Aliquam vitae ligula dapibus, tempus elit quis, facilisis turpis. Donec id hendrerit ex. Etiam leo tellus, condimentum id condimentum id, elementum nec mi. Aliquam erat volutpat. Fusce fringilla, eros aliquet imperdiet sodales, tortor odio aliquet leo, et sodales quam quam ac erat. Aliquam scelerisque luctus metus, at bibendum lacus mollis ac.",
          },
          {
            key: 5,
            order: 5,
            paragraph:
              "Nunc mauris est, pellentesque eu malesuada tempus, scelerisque id sapien. Vivamus purus purus, tempus eget orci non, tempus pulvinar mauris. In hac habitasse platea dictumst. Nam non est id libero lacinia efficitur tempus non nunc. Duis id pulvinar nisi. Cras auctor placerat aliquam. Mauris consectetur, ante non efficitur ornare, leo eros pharetra leo, sed luctus arcu dolor ut elit. Curabitur arcu eros, maximus sit amet euismod in, varius vel felis. Fusce neque sapien, volutpat quis erat sit amet, viverra malesuada magna. Nullam sollicitudin rutrum diam ac ornare. Maecenas porta molestie facilisis. Phasellus eget sollicitudin purus. In vitae elementum diam, et commodo massa. Phasellus pharetra, augue quis dictum volutpat, mauris nisl iaculis libero, vestibulum eleifend tortor tellus at nibh.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 3",
          },
          {
            key: 2,
            relevance: 2,
            source: "News Paper 1",
          },
          {
            key: 3,
            relevance: 3,
            source: "News Paper 2",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 2",
          },
          {
            key: 5,
            relevance: 5,
            source: "New Paper 3",
          },
        ],
      },
      {
        key: 5,
        id: 5768,
        title: "Truthful Story 5",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 2",
          },
          {
            key: 2,
            relevance: 2,
            source: "News Paper 2",
          },
          {
            key: 3,
            relevance: 3,
            source: "Youtube",
          },
          {
            key: 4,
            relevance: 4,
            source: "Youtube",
          },
        ],
      },
      {
        key: 6,
        id: 9006,
        title: "Falcified Story 6",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
          {
            key: 4,
            order: 4,
            paragraph:
              "Integer vel viverra urna, vehicula volutpat leo. Nulla porttitor, nunc ac pharetra vehicula, ex metus condimentum ipsum, et ullamcorper ex tellus ut nisl. Phasellus lacinia odio sit amet augue dignissim, et bibendum nisl commodo. Aliquam vitae ligula dapibus, tempus elit quis, facilisis turpis. Donec id hendrerit ex. Etiam leo tellus, condimentum id condimentum id, elementum nec mi. Aliquam erat volutpat. Fusce fringilla, eros aliquet imperdiet sodales, tortor odio aliquet leo, et sodales quam quam ac erat. Aliquam scelerisque luctus metus, at bibendum lacus mollis ac.",
          },
          {
            key: 5,
            order: 5,
            paragraph:
              "Nunc mauris est, pellentesque eu malesuada tempus, scelerisque id sapien. Vivamus purus purus, tempus eget orci non, tempus pulvinar mauris. In hac habitasse platea dictumst. Nam non est id libero lacinia efficitur tempus non nunc. Duis id pulvinar nisi. Cras auctor placerat aliquam. Mauris consectetur, ante non efficitur ornare, leo eros pharetra leo, sed luctus arcu dolor ut elit. Curabitur arcu eros, maximus sit amet euismod in, varius vel felis. Fusce neque sapien, volutpat quis erat sit amet, viverra malesuada magna. Nullam sollicitudin rutrum diam ac ornare. Maecenas porta molestie facilisis. Phasellus eget sollicitudin purus. In vitae elementum diam, et commodo massa. Phasellus pharetra, augue quis dictum volutpat, mauris nisl iaculis libero, vestibulum eleifend tortor tellus at nibh.",
          },
          {
            key: 6,
            order: 6,
            paragraph:
              "Quisque quis congue erat. Morbi vitae sapien molestie, elementum felis quis, euismod ex. In lobortis justo elit, in lobortis orci feugiat a. Pellentesque nisl sapien, egestas nec urna eget, molestie rhoncus eros. Aenean nec lorem faucibus, tincidunt leo a, ultricies nibh. Morbi dapibus libero efficitur, fermentum ipsum vitae, scelerisque tellus. Fusce odio diam, eleifend nec justo non, sagittis viverra ipsum. Nulla volutpat ex sapien, eu sollicitudin enim dignissim at. Fusce at libero blandit, tempus ligula quis, luctus nisl. Aliquam sem massa, congue ut viverra et, mollis et eros. Nulla ac pellentesque urna, sed eleifend dolor. Integer eget porta lectus, sed eleifend dui. Vivamus eros erat, condimentum a scelerisque id, bibendum sit amet magna.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 2",
          },
          {
            key: 2,
            relevance: 2,
            source: "News Paper 4",
          },
          {
            key: 3,
            relevance: 3,
            source: "News Paper 4",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 1",
          },
          {
            key: 5,
            relevance: 5,
            source: "News Paper 1",
          },
          {
            key: 6,
            relevance: 6,
            source: "News Paper 3",
          },
          {
            key: 7,
            relevance: 7,
            source: "Youtube Link",
          },
          {
            key: 8,
            relevance: 8,
            source: "Youtube Link",
          },
        ],
      },
      {
        key: 7,
        id: 789,
        title: "Deceitful Story 7",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 1",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "Youtube Link",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 1",
          },
          {
            key: 5,
            relevance: 5,
            source: "News Paper 4",
          },
          {
            key: 6,
            relevance: 6,
            source: "News Paper 4",
          },
        ],
      },
      {
        key: 8,
        id: 8008,
        title: "Fabricated Story 8",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
          {
            key: 4,
            order: 4,
            paragraph:
              "Integer vel viverra urna, vehicula volutpat leo. Nulla porttitor, nunc ac pharetra vehicula, ex metus condimentum ipsum, et ullamcorper ex tellus ut nisl. Phasellus lacinia odio sit amet augue dignissim, et bibendum nisl commodo. Aliquam vitae ligula dapibus, tempus elit quis, facilisis turpis. Donec id hendrerit ex. Etiam leo tellus, condimentum id condimentum id, elementum nec mi. Aliquam erat volutpat. Fusce fringilla, eros aliquet imperdiet sodales, tortor odio aliquet leo, et sodales quam quam ac erat. Aliquam scelerisque luctus metus, at bibendum lacus mollis ac.",
          },
          {
            key: 5,
            order: 5,
            paragraph:
              "Nunc mauris est, pellentesque eu malesuada tempus, scelerisque id sapien. Vivamus purus purus, tempus eget orci non, tempus pulvinar mauris. In hac habitasse platea dictumst. Nam non est id libero lacinia efficitur tempus non nunc. Duis id pulvinar nisi. Cras auctor placerat aliquam. Mauris consectetur, ante non efficitur ornare, leo eros pharetra leo, sed luctus arcu dolor ut elit. Curabitur arcu eros, maximus sit amet euismod in, varius vel felis. Fusce neque sapien, volutpat quis erat sit amet, viverra malesuada magna. Nullam sollicitudin rutrum diam ac ornare. Maecenas porta molestie facilisis. Phasellus eget sollicitudin purus. In vitae elementum diam, et commodo massa. Phasellus pharetra, augue quis dictum volutpat, mauris nisl iaculis libero, vestibulum eleifend tortor tellus at nibh.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 1",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "Youtube Link",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 1",
          },
          {
            key: 5,
            relevance: 5,
            source: "News Paper 4",
          },
          {
            key: 6,
            relevance: 6,
            source: "News Paper 4",
          },
        ],
      },
      {
        key: 9,
        id: 9001,
        title: "Legitimate Story 9",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
          {
            key: 4,
            order: 4,
            paragraph:
              "Integer vel viverra urna, vehicula volutpat leo. Nulla porttitor, nunc ac pharetra vehicula, ex metus condimentum ipsum, et ullamcorper ex tellus ut nisl. Phasellus lacinia odio sit amet augue dignissim, et bibendum nisl commodo. Aliquam vitae ligula dapibus, tempus elit quis, facilisis turpis. Donec id hendrerit ex. Etiam leo tellus, condimentum id condimentum id, elementum nec mi. Aliquam erat volutpat. Fusce fringilla, eros aliquet imperdiet sodales, tortor odio aliquet leo, et sodales quam quam ac erat. Aliquam scelerisque luctus metus, at bibendum lacus mollis ac.",
          },
          {
            key: 5,
            order: 5,
            paragraph:
              "Nunc mauris est, pellentesque eu malesuada tempus, scelerisque id sapien. Vivamus purus purus, tempus eget orci non, tempus pulvinar mauris. In hac habitasse platea dictumst. Nam non est id libero lacinia efficitur tempus non nunc. Duis id pulvinar nisi. Cras auctor placerat aliquam. Mauris consectetur, ante non efficitur ornare, leo eros pharetra leo, sed luctus arcu dolor ut elit. Curabitur arcu eros, maximus sit amet euismod in, varius vel felis. Fusce neque sapien, volutpat quis erat sit amet, viverra malesuada magna. Nullam sollicitudin rutrum diam ac ornare. Maecenas porta molestie facilisis. Phasellus eget sollicitudin purus. In vitae elementum diam, et commodo massa. Phasellus pharetra, augue quis dictum volutpat, mauris nisl iaculis libero, vestibulum eleifend tortor tellus at nibh.",
          },
          {
            key: 6,
            order: 6,
            paragraph:
              "Quisque quis congue erat. Morbi vitae sapien molestie, elementum felis quis, euismod ex. In lobortis justo elit, in lobortis orci feugiat a. Pellentesque nisl sapien, egestas nec urna eget, molestie rhoncus eros. Aenean nec lorem faucibus, tincidunt leo a, ultricies nibh. Morbi dapibus libero efficitur, fermentum ipsum vitae, scelerisque tellus. Fusce odio diam, eleifend nec justo non, sagittis viverra ipsum. Nulla volutpat ex sapien, eu sollicitudin enim dignissim at. Fusce at libero blandit, tempus ligula quis, luctus nisl. Aliquam sem massa, congue ut viverra et, mollis et eros. Nulla ac pellentesque urna, sed eleifend dolor. Integer eget porta lectus, sed eleifend dui. Vivamus eros erat, condimentum a scelerisque id, bibendum sit amet magna.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 1",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "Youtube Link",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 1",
          },
          {
            key: 5,
            relevance: 5,
            source: "News Paper 4",
          },
          {
            key: 6,
            relevance: 6,
            source: "News Paper 4",
          },
        ],
      },
      {
        key: 10,
        id: 5610,
        title: "Factual Story 10",
        pict: "https://picsum.photos/400",
        para: [
          {
            key: 1,
            order: 1,
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pellentesque libero, vitae pharetra diam. Vivamus et neque non ipsum laoreet aliquam et a sapien. Donec consequat, ligula ultrices pulvinar molestie, augue massa volutpat nibh, eu convallis sem magna non sapien. Nulla pretium, dui ut vehicula vestibulum, elit justo fringilla nunc, et sodales erat urna ut tellus. Maecenas ornare semper mauris, in suscipit tortor varius sed. Donec pellentesque consectetur metus id blandit. Nulla non sem nec quam rhoncus consectetur sit amet ut justo. Nulla tristique ipsum eget nunc mattis tempor. Cras non gravida nisi. Proin eget consectetur ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat enim vitae sem pellentesque, a posuere neque consectetur. Morbi gravida dapibus faucibus. Vivamus quis consectetur leo, vel tristique libero. Phasellus egestas metus vel metus faucibus, eget rutrum augue convallis.",
          },
          {
            key: 2,
            order: 2,
            paragraph:
              "Maecenas id tellus at risus facilisis rutrum eget eget libero. Vivamus quis purus id ligula molestie rutrum eget nec massa. Vivamus molestie at eros et vulputate. Nam porta sed velit accumsan interdum. Vestibulum a neque urna. Vivamus quis sagittis sem, in commodo purus. Sed pellentesque iaculis mauris vel maximus. Nunc sed diam varius, suscipit ipsum eu, volutpat eros. Donec vitae malesuada elit, at ornare dui. Nunc in bibendum erat. Sed maximus aliquam tellus, eget posuere nisl tincidunt vitae. Mauris ornare tortor est, et dapibus lorem vestibulum in. Etiam commodo neque in justo volutpat varius. Mauris accumsan tempus lectus, eu viverra sem mollis a. Morbi quis ultricies mi, non auctor diam.",
          },
          {
            key: 3,
            order: 3,
            paragraph:
              "Curabitur faucibus nulla tortor, sit amet tincidunt massa imperdiet eu. Proin ac ultrices est. Cras tempor ut nunc vitae scelerisque. Donec at arcu odio. Nulla varius enim magna, quis malesuada ex faucibus tristique. Morbi et nisl tortor. Morbi a pulvinar velit, non lobortis ipsum. Etiam id neque sed felis ultrices varius. Sed pretium nulla eu erat posuere dictum. Curabitur ut aliquet mauris. In nisl augue, dictum at lacus viverra, tristique lacinia augue.",
          },
          {
            key: 4,
            order: 4,
            paragraph:
              "Integer vel viverra urna, vehicula volutpat leo. Nulla porttitor, nunc ac pharetra vehicula, ex metus condimentum ipsum, et ullamcorper ex tellus ut nisl. Phasellus lacinia odio sit amet augue dignissim, et bibendum nisl commodo. Aliquam vitae ligula dapibus, tempus elit quis, facilisis turpis. Donec id hendrerit ex. Etiam leo tellus, condimentum id condimentum id, elementum nec mi. Aliquam erat volutpat. Fusce fringilla, eros aliquet imperdiet sodales, tortor odio aliquet leo, et sodales quam quam ac erat. Aliquam scelerisque luctus metus, at bibendum lacus mollis ac.",
          },
        ],
        sources: [
          {
            key: 1,
            relevance: 1,
            source: "News Paper 1",
          },
          {
            key: 2,
            relevance: 2,
            source: "Youtube Link",
          },
          {
            key: 3,
            relevance: 3,
            source: "Youtube Link",
          },
          {
            key: 4,
            relevance: 4,
            source: "News Paper 1",
          },
        ],
      },
    ],
    displayData: [],
  };

  // renderSources() {
  //   let sources = this.state.sources;
  //   let length = sources.length;
  //   let mod = length % 3;
  //   let toReturn = "";

  //   for (i = 0; i < length; i++) {
  //     toReturn = "";
  //   }
  // }

  renderStory() {
    console.log(this.props);
    let display = this.state.displayData;
    if (display) {
      return (
        <div>
          <div className="row">
            <div className="col-lg-5">
              <Image src={display.pict} />
            </div>
            <div className="col-lg-7">
              {display.para.map((v, i) => {
                return (
                  <div className="colored-text" key={v.key}>
                    {v.paragraph}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            {display.sources.map((v, i) => {
              return (
                <div key={i} className="colored-text col-sm-3">
                  Relevance-{v.relevance}:{v.source}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        {this.renderStory()}
      </div>
    );
  }
}

export default StoryApp;
