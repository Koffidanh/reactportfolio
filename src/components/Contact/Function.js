import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Email from 'jquery';
export default class Function extends Component {
    componentDidMount() {
        $(document).ready(function () {

            //Create a send function
            function send() {
        
                var name = $("#name").val().trim();
                //console.log(name)
                var email = $("#email").val().trim();
                //console.log(email)
                var message = $("#message").val().trim();
                //console.log(message)
                Email.send({
                    SecureToken: "0017943f-78a4-4577-93e4-72812b9b22c2",
                    To: 'koffi.danh@gmail.com',
                    From: "koffi.danh@gmail.com",
                    Subject: "Message from Portfolio",
                    Body: name + "\n" + message + "\n" + email
                }).then(
                    message => alert("Message sent!")
                );
        
        
            }
        
            //Create a button listener for send
            $("#sendMessage").on("click", function (event) {
                event.preventDefault();
        
                send()
            })
            //Create a button listener for clear
            $("#resetMessage").on("click", function (event) {
                event.preventDefault();
        
                reset()
            })
        
            //Create a reset function
            function reset() {
                $("#name").text('') ;
                $("#email").text('');
                $("#message").text('');
        
            }
        
        });
    }
   
}

