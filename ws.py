import bottle
@bottle.get('/')
@bottle.get('/<path:path>')
def server_static(path='index.html'):
    return bottle.static_file(path, root='./')
@bottle.post('/<path:path>')
def server_static(path='index.html'):
    open(path,'w').write(bottle.request.body.read())
    return ['OK']
