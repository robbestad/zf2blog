<?php

namespace Blog\Model;

use Zend\Db\TableGateway\AbstractTableGateway;
use Zend\Db\Adapter\Adapter;
use Zend\Db\ResultSet\ResultSet;

class BlogTable extends AbstractTableGateway
{
    protected $table = 'blog';
    protected $logger;

    public function __construct(Adapter $adapter)
    {
        $this->adapter = $adapter;
        $this->resultSetPrototype = new ResultSet();
        $this->resultSetPrototype->setArrayObjectPrototype(new Blog());

        $this->initialize();
    }

    public function setLogger($logger)
    {
        $this->logger = $logger;
    }
    
    public function fetchAll()
    {
        $resultSet = $this->select();
        return $resultSet;
    }

    public function getBlog($id)
    {
        $id  = (int) $id;
        $rowset = $this->select(array('id' => $id));
        $row = $rowset->current();
        if (!$row) {
            throw new \Exception("Could not find row $id");
        }
        return $row;
    }

    public function saveBlog(Blog $blog)
    {
        $data = array(
            'content' => $blog->content,
            'title'  => $blog->title,
        );

        $id = (int)$blog->id;
        if ($id == 0) {
            $this->logger->info("New entry added: {$blog->title} ");
            $this->insert($data);
        } else {
            if ($this->getBlog($id)) {
                $this->logger->info("Edit blog ID {$id}: {$blog->title}");
                $this->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function deleteBlog($id)
    {
        $this->logger->info("Deleted blog ID {$id}");
        $this->delete(array('id' => $id));
    }

}
