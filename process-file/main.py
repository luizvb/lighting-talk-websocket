import socketio

def handler():
    sio = socketio.Client()        
    @sio.event
    def connect():
        sio.emit('processing', {})
    
    sio.connect('http://localhost:3000')
    
handler()