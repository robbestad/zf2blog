<?php

namespace Blog\Model;

use Zend\Db\TableGateway\AbstractTableGateway;
use Zend\Db\Adapter\Adapter;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Sql;



class BlogTable extends AbstractTableGateway
{
    protected $table = 'posts';
    #protected $logger;

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
    	#$resultSet = $this->select(array('activepost'=>"1"));
        #return $resultSet;
        $select = new Select();
         $select->from('posts')
        ->columns(array('id', 'title', 'activepost', 'lead', 'content', 'badge'))
        #->join('categorypost', 'post.id = categorypost.postID', array('id' => 'id'))
        ->order(array('id DESC', 'title DESC'))
        ->where('activepost = 1');

        $statement = $this->adapter->createStatement();
        $select->prepareStatement($this->adapter, $statement);

        $resultSet = new ResultSet();
        $resultSet->initialize($statement->execute());

        return $resultSet;
    }

    public function fetchUpcoming()
    {
         # $resultSet = $this->select(array('activepost'=>"0"));
         $select = new Select();
         $select->from('posts')
        ->columns(array('id', 'title', 'activepost', 'lead', 'content', 'badge'))
        #->join('categorypost', 'post.id = categorypost.postID', array('id' => 'id'))
        ->order(array('id DESC', 'title DESC'))
        ->where('activepost = 0');

        $statement = $this->adapter->createStatement();
        $select->prepareStatement($this->adapter, $statement);

        $resultSet = new ResultSet();
        $resultSet->initialize($statement->execute());

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
            'lead' => $blog->lead,
            'title'  => $blog->title,
            'content' => $blog->content,
            'badge'  => $blog->badge,
            'activepost' => $blog->activepost,
         );

        //throw new \Exception("Could not find row $data");
        
        $id = (int)$blog->id;
        if ($id == 0) {
        
            //$this->logger->info("New entry added: {$blog->title} ");
            $this->insert($data);
        } else {
            if ($this->getBlog($id)) {

            //$this->logger->info("Edit blog ID {$id}: {$blog->title}");
               $this->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function deleteBlog($id)
    {
       // $this->logger->info("Deleted blog ID {$id}");
        $this->delete(array('id' => $id));
    }

}
